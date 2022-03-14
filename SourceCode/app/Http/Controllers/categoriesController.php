<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;

class categoriesController extends Controller
{
    public function addCategory(){

        return view('dashboard.categories.add' , ['name'=>'ahmad']);
    }

    public function postAddCategory(Request $request){
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'img'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:5048'
        ]);

        $newImageName = time(). '-'. 'category'. '.' . $request->img->extension();
        $request->img->move(public_path('images'), $newImageName);

        $category = new Categories();
        $category->name = $request->name;
        $category->description = $request->description;
        $category->img = $newImageName;
        $category->save();
        return redirect()->back();
    }

    public function getCategories(){
        $categories = Categories::get();
        return view('dashboard.categories.view',  compact('categories'));
    }

    public function deleteCategory($id){
        $category = Categories::find($id);
        $category->delete();
        return redirect()->back();
    }

    public function deleteAllCategories(){
        Categories::truncate();

        return redirect()->back();
    }

    public function updateCategory($id){
        $category = Categories::find($id);

        return view('dashboard.categories.update' ,compact('category') );
    }

    public function postUpdateCategory(Request $request){
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'img'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:5048'
        ]);

        $category = Categories::find($request->id);
        $category->name = $request->name;
        $category->description = $request->description;


        if($request->hasFile('img')){
            $newImageName = time(). '-'. 'category'. '.' . $request->img->extension();
            $request->img->move(public_path('images'), $newImageName);
            $category->img = $newImageName;
        }


        $category->save();

        return redirect()->back();
    }

}
