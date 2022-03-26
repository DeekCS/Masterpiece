<?php


namespace App\Http\Controllers\API;

use App\Models\Categories;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Support\Facades\Storage;

class categoriesController extends Controller
{
    public function addCategory(Request $request){
        try{
            $request->validate([
                'name'=>'required',
                'description'=>'required',
                'img'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:5048'
            ]);

            $category = new Categories();
            // $img = request()->file('img')->hashName(); // name

            // $newImageName = time(). '-'. 'category'. '.' . $request->img->extension();
            // $request->img->move(public_path('images'), $newImageName);
            // $request->file('img')->store('categoriesImages',$img);

//            if($request->hasFile('img')){
//                $image =$request->file('img');
//                $extension =  $image->getClientOriginalExtension();
//                $imageName = time().'.'. $extension;
//                $image->move('uploads/categories/'.$imageName);
//                $category->img ='uploads/categories/'.$imageName ;
//            }
            if ($request->hasFile('img')) {
                $image = $request->file('img');
                $imageName = $image->getClientOriginalName();
                $image->move('uploads/categories/', $imageName);
                $category->img = $imageName;
            }
            $category->name = $request->input('name');
            $category->description = $request->input('description');
            $category->save();
            return response()->json(['message'=>'Category added successfully'], 200);
        }catch(Exception $e){
            return response()->json(['error'=> $e->getMessage() ] ,500);
        }
    }

    public function getAllCategories(): JsonResponse
    {
        try {
            $categories = Categories::all();
            return response()->json($categories, 200);
        } catch (Exception $e) {
            return response()->json( $e->getMessage(), 500);
        }
    }

    public function getCategoryById(Request $request){
        try{
            $category = Categories::find($request->id);
            if($category){
                return response()->json([$category]);
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



