<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class coursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */

    public const NO_COURSE_FOUND = 'No course found';

    public function addCourse(Request $request): JsonResponse
    {
        $course = new Courses();
        try{
            //validate the request
            $this->validate($request, [
                'name' => 'required',
                'description' => 'required',
                'image' => 'required',
                'category_id' => 'required',
            ]);
        }
        catch (Exception $e){
            return response()->json(['error' => $e->getMessage()], 400);
        }
        try {
            $this->extracted($request, $course);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json(['success' => 'Course Created Successfully']);

    }


    //create a function to get all courses
    public function getAllCourses(): JsonResponse
    {
        // if there is no courses in the database return an error
        if (Courses::count() === 0) {
            return response()->json(['error' => self::NO_COURSE_FOUND], 404);
        }
        //get all courses
        $courses = Courses::all();
        //return the courses
        return response()->json(['success' => $courses], 200);
    }

    //create a function to get a single course
    public function getCourseById($id)
    {
        try {
            if(Courses::where('id', $id)->exists()){
                $course = Courses::find($id);
        }
        else{
            return response()->json(['error' => self::NO_COURSE_FOUND], 404);
        }

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json(['success' => $course], 200);
    }

    //create a function to update a course
    public function updateCourse(Request $request, $id)
    {
        try {
            if(Courses::where('id', $id)->exists()){
                $course = Courses::find($id);
                $this->extracted($request, $course);
            }
            else{
                return response()->json(['error' => self::NO_COURSE_FOUND], 404);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json(['success' => 'Course Updated Successfully']);
    }

    //create a function to delete a course
    public function deleteCourse($id)
    {
        try {
            if(Courses::where('id', $id)->exists()){
                $course = Courses::find($id);
                $course->delete();
            }
            else{
                return response()->json(['error' => self::NO_COURSE_FOUND], 404);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json(['success' => 'Course Deleted Successfully']);
    }


    public function getCoursesNames(){
        try{
            $coursesNames =Courses::all('name');
            if(count($coursesNames) > 0 ){
                return response()->json(['200' => 'OK', 'coursesNames'=>$coursesNames]);
            }else{
                return response()->json(['404' => 'No courses was found']);
            }

        }catch(Exception $e){
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * @param  Request  $request
     * @param  Courses  $course
     *
     * @return void
     */
    public function extracted(Request $request, Courses $course): void
    {
        $course->name = $request->input('name');
        $course->description = $request->input('description');
        $course->year = $request->input('year');
        $course->requirements = $request->input('requirements');
        $course->category_id = $request->input('category_id');
        $course->save();
    }




}
