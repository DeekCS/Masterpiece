<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\commentsController;
use App\Http\Controllers\API\coursesController;
use App\Http\Controllers\API\postsController;
use App\Http\Controllers\API\userController;
use App\Http\Controllers\API\categoriesController;
use App\Http\Controllers\API\resourcesController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Users
Route::controller(userController::class)->group(function(){
    Route::post('users','adduser');
    Route::get('/users','getAllUsers');
    Route::get('/user/{id}','getUserById');
    Route::put('/users/{id}','updateUser');
    Route::delete('/users/{id}','deleteUser');
    //check if user exists
    Route::get('/users/check/{email}',[userController::class,'checkEmail']);
    //login route
    Route::post('/login',[userController::class,'login']);
});




// Categories
Route::controller(categoriesController::class)->group(function(){
    Route::post('/category', 'addCategory');
    Route::post('/category/{id}' , 'updateCategory');
    Route::get('/category' , 'getAllCategories');
    Route::get('/category/{id}' , 'getCategoryById');
    Route::delete('/category/{id}' , 'deleteCategory');
});

//Courses
Route::controller(coursesController::class)->group(function(){
    Route::post('course' , 'addCourse');
    Route::put('course/{id}' , 'updateCourse');
    Route::get('course' , 'getAllCourses');
    Route::get('course/{id}' ,  'getCourseById');
    Route::delete('course/{id}' ,  'deleteCourse');
    Route::get('courses' , 'getCoursesNames');
//    get image from public folder
//    Route::get('course/image/{image}' ,  'getImage');
//    uploadImage
    Route::post('course/image' ,  'uploadImage');
    //getCoursesByCategoryId route
    Route::get('courses/category/{id}' ,  'getCoursesByCategoryId');
//    searchCoursesByName
    Route::get('search/{keyword}' ,  'searchCoursesByName');
    //sortCoursesByYear($order)
    Route::get('sort/{order}' ,  'sortCoursesByYear');
    //getPaginatedCourses(Request $request)
    Route::get('course/list/{page}' ,  'getPaginatedCourses');
});

//Posts
Route::controller(postsController::class)->group(function(){
    Route::post('post' , 'createPost');
    Route::put('post/{id}' , 'updatePost');
    Route::get('posts' ,  'getAllPosts');
    Route::get('posts/{id}' ,  'getPostById');
    Route::delete('post/{id}' ,  'deletePost');
});


//Comments
Route::controller(commentsController::class)->group(function(){
    Route::post('add-comment' , 'createComment');
    Route::put('update-comment/{id}' ,'updateComment');
    Route::get('posts/{post_id}/comments' ,  'getAllComments');
    //get comment by id
    Route::get('comments/{id}' , 'getCommentById');
    //get comment by post id
    Route::get('posts/{post_id}/comments' ,'getCommentsByPostId');
    // get comment by user id
    Route::get('users/{user_id}/comments' ,  'getCommentsByUserId');
    Route::delete('delete-comment/{id}' , 'deleteComment');
});


// Resources
Route::controller(resourcesController::class)->group(function(){
    // Route::get('course/{id}/resources' , 'getResources');
    Route::post('resource' , 'addResources');
    Route::delete('course/resource/{id}' , 'deleteResource');
    // update
    Route::get('course/resource/{id}' , 'getResourceByid');
    // get course resources
    Route::get('course/{id}/resources' , 'getCourseResourcesById');
    //downloadFile route
    Route::get('resource/download/{id}' , 'downloadFile');
    //getAllResources
    Route::get('resources' , 'getAllResources');

});




