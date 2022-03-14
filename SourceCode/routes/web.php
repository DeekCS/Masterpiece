<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\adminController;
use App\Http\Controllers\coursesController;
use App\Http\Controllers\categoriesController;
use App\Http\Controllers\API\resourcesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('dashboard', [adminController::class , 'index']);

//  ----------------- Categories Controller ----------------------
Route::get('dashboard/categories/add', [categoriesController::class , 'addCategory']);
Route::post('dashboard/categories/postadd', [categoriesController::class , 'postAddCategory']);

Route::get('dashboard/categories', [categoriesController::class , 'getCategories']);

Route::delete('dashboard/categories/delete/{id}', [categoriesController::class , 'deleteCategory']);
Route::get('dashboard/categories/delete-all', [categoriesController::class , 'deleteAllCategories']);

Route::get('dashboard/categories/update/{id}', [categoriesController::class , 'updateCategory']);
Route::post('dashboard/categories/postupdate', [categoriesController::class , 'postUpdateCategory']);


//  ----------------- Courses Controller ----------------------
Route::get('dashboard/courses/add', [coursesController::class , 'addCourse']);
Route::post('dashboard/courses/postadd', [coursesController::class , 'postAddCourse']);

Route::get('dashboard/courses', [coursesController::class , 'getCourses']);

Route::get('dashboard/courses/delete/{id}', [coursesController::class , 'deleteCourse']);
Route::get('dashboard/courses/delete-all', [coursesController::class , 'deleteAllCourses']);

Route::get('dashboard/courses/update/{id}', [coursesController::class , 'updateCourse']);
Route::post('dashboard/courses/postupdate', [coursesController::class , 'postUpdateCourse']);



// tests
// Route::get('resource/form' , [resourcesController::class ,'getForm']);

