<?php


namespace App\Http\Controllers\API;

use App\Models\Categories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;

class categoriesController extends Controller
{
    public function addCategory(Request $request){
        try{
            $request->validate([
                'name'=>'required',
                'description'=>'required',
                'img'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:5048'
            ]);

            $newImageName = time(). '-'. 'category'. '.' . $request->img->extension();
            $request->img->move(public_path('images'), $newImageName);

            $category = new Categories();
            $category->name = $request->input('name');
            $category->description = $request->input('description');
            $category->img = $newImageName;
            $category->save();
            return response()->json(['message'=>'Category added successfully'], 200);
        }catch(Exception $e){
            return response()->json(['error'=> $e->getMessage() ] ,500);
        }
    }

    public function getAllCategories(){
        try{
            $categories = Categories::all();

            if(count($categories) > 0 ){
                return response()->json([
                    'status'=> 200,
                    'categories'=>$categories
                ]);
            }

            return response()->json(['error' =>'Ther is no categories']);
        }catch(Exception $e){
            return response()->json(['error'=> $e->getMessage() ] ,500);
        }
    }

    public function getCategoryById(Request $request){
        try{
            $category = Categories::find($request->id);
            if($category){
                return response()->json([
                    'status'=>200,
                    'category'=>$category]);
                }

            return response()->json(['error' =>'The category is not exist']);
        }catch(Exception $e){
            return response()->json(['error'=> $e->getMessage() ] ,500);
        }
    }


    public function updateCategory(Request $request){
        try{
            $category = Categories::find($request->id);

            $category->name = $request->input('name');
            $category->description = $request->input('description');
            $category->img = $request->input('img');
            $category->save();
            return response()->json([
                'status'=>200,
                'message'=>'Successfully updated'
            ]);
        }catch(Exception $e){
            return response()->json(['error'=> $e->getMessage() ] ,500);
        }
    }


    public function deleteCategory(Request $request){
        try{
            $category = Categories::find($request->id);
            $category->delete();

            return response()->json([
                'status'=>200,
                'message'=>'Category deleted successfully'
            ]);
        }catch(Exception $e){
            return response()->json(['error'=> $e->getMessage() ] ,500);
        }
    }
}
