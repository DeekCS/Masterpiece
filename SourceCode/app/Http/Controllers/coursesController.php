<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Courses;
use Illuminate\Http\Request;

class coursesController extends Controller
{
    //
    public function addCourse(){
        $categories = Categories::get();
        return view('dashboard.courses.add' , compact('categories') );
    }

    public function postAddCourse(Request $request){
        $request->validate([
            'name'=>'required',
            'video'=>'required',
            'description'=>'required|max:255',
            'image'=>'required|mimes:jpeg,png,jpg,gif,svg|max:5048',
            'file'=>'mimes:pdf,doc,docx,ppt,pptx,txt,xls,xlsx',
            'requirements'=>'required|max:255',
        ]);
        $newImageName = time(). '-'. 'course'. '.' . $request->image->extension();
        $request->image->move(public_path('images'), $newImageName);

        $course = new Courses();

        if($request->file != null){
            $fileName = time(). '-'. $request->name . ".". $request->file->extension();
            $request->file->move(public_path('files'), $fileName);
            $course->file = $fileName;
        }


        $course->name = $request->name;
        $course->description = $request->description;
        $course->image = $newImageName;
        $course->year = $request->year;
        $course->category_id = $request->category_id;
        $course->requirements = $request->requirements;
        if($request->video != null){
            $course->video = $request->video;
        }
        $course->save();

        return redirect()->back();
    }

    public function getCourses(){
        $courses = Courses::get();

        return view('dashboard.courses.view',  compact('courses'));
    }

    public function deleteCourse($id){
        $course = Courses::find($id);
        $course->delete();
        return redirect()->back();
    }

    public function deleteAllCourses(){
        Courses::truncate();

        return redirect()->back();
    }

    public function updateCourse($id){
        $course = Courses::find($id);

        return view('dashboard.courses.update' ,compact('course') );
    }

    public function postUpdateCourse(Request $request){
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'img'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:5048'
        ]);

        $course = Courses::find($request->id);
        $course->name = $request->name;
        $course->description = $request->description;

        if($request->img != null){

            $newImageName = time(). '-'. 'category'. '.' . $request->img->extension();
            $request->img->move(public_path('images'), $newImageName);

            $course->img =  $newImageName;
        }
        $course->save();

        return redirect()->back();
    }



}
