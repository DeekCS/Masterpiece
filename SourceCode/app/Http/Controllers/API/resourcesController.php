<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Courses;
use App\Models\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class resourcesController extends Controller
{
    //


    public function addResources(Request $request): JsonResponse
    {
        $resources = new Resources();
        try{
            //validate the request
            $this->validate($request, [
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg',
                'file' => 'required|mimes:pdf,doc,docx,ppt,pptx,txt,xls,xlsx',
                'video' => 'required',
                'course_id' => 'required',
            ]);
        }
        catch (Exception $e){
            return response()->json(['error' => $e->getMessage()], 400);
        }
        try {
            $this->extracted($request, $resources);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json(['success' => 'Resource Created Successfully']);
    }






    // delete Resource
    public function deleteResource($id): JsonResponse
    {
        try {
            $resource = Resources::find($id);
            if ($resource) {
                $resource->delete();
                return response()->json(['success' => 'Resource Deleted Successfully']);
            }
            return response()->json(['404' => 'No resource was found']);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Get Resource By ID
    public function getResourceByid($id): JsonResponse
    {
        try {
            $resource = Resources::find($id);
            $coursesNames =Courses::all('name');
            if ($resource) {
                return response()->json(['200' => 'OK', 'resource' => $resource , 'coursesNames'=>$coursesNames]);
            }
            return response()->json(['404' => 'No resource was found']);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Create Update Method for User Update
    public function updateResource(Request $request, $id): JsonResponse
    {
        try {
            $resource = Resources::find($id);
            $request->validate([
                'image' => 'required|mimes:jpeg,png,jpg,gif,svg',
                'file' =>  'required|mimes:pdf,doc,docx,ppt,pptx,txt,xls,xlsx',
                'video' => 'required'
            ]);

            if ($request->image != null) {

            }
            if ($resource) {
                $this->extracted($request, $resource);
                return response()->json(['message' => 'User Updated Successfully', 'user' => $resource], 200);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }




    public function extracted(Request $request, Resources $resource)
    {

        if($request->file != null){
            $fileName = 'file-'.time().'.'.$request->file->extension();
            $request->file->move(public_path('files'), $fileName);
            $resource->files = $fileName;
        }

        if($request->image != null){
            $imageName = 'image-'.time().'.'.$request->image->extension();
            $request->image->move(public_path('images/resources'), $imageName);
            $resource->images = $imageName;
        }

        $resource->videos = $request->input('video');
        $resource->course_id = $request->input('course_id');
        $resource->save();
    }



    public function getCourseResourcesById($id)
    {
        try {
            if(Courses::where('id', $id)->exists()){
                $resources = Courses::find($id)->getResources;
                if(count($resources) > 0){
                    return response()->json(['success' => $resources], 200);
                }else{
                    return response()->json(['error' => 'There is not any resource'], 404);

                }
        }
        else{
            return response()->json(['error' => 'There is not any course'], 404);
        }

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }



}
