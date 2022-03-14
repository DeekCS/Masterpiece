@include('dashboard.header')

    <div class="container-fluid">
        <div class="content-wrapper">
            <div class="row">
                <div class="mx-auto col-6">

                    <!-- general form elements -->
                    <div class="card card-primary my-3">
                        <div class="card-header">
                        <h3 class="card-title">Add Course</h3>
                        </div>
                        <!-- /.card-header -->

                        <!-- form start -->
                        <form action="{{url('dashboard/courses/postadd')}}"  method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="card-body">
                                @if ($errors->any())
                                    <div class="alert alert-danger">
                                        <ul>
                                            @foreach ($errors->all() as $error)
                                                <li>{{ $error }}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                                {{-- name input --}}
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" class="form-control" name="name" id="exampleInputEmail1" placeholder="Enter email">
                                </div>

                                {{-- decription input --}}
                                <div class="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <input type="text" class="form-control" name='description' id="exampleInputPassword1" placeholder="Password">
                                </div>

                                {{-- img input --}}
                                <div class="input-group">
                                    <label for="exampleInputFile">Image </label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                        <input type="file" class="custom-file-input" name='image' id="exampleInputFile">
                                        <label class="custom-file-label" for="exampleInputFile">Choose image...</label>
                                        </div>
                                    </div>
                                </div>

                                {{-- file input --}}
                                <div class="form-group">
                                    <label for="inputGroupFile02">File</label>
                                    <div class="custom-file">
                                    <input type="file" class="form-control" name="file" id="inputGroupFile02">
                                    <label class="custom-file-label" for="inputGroupFile02">Choose file..</label>
                                    </div>
                                </div>

                                {{-- video input --}}
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Video</label>
                                    <input type="text" class="form-control" name='video' id="exampleInputPassword1" placeholder="url">
                                </div>

                                <!-- Requirements -->
                                <div class="form-group">
                                    <label>Requirements</label>
                                    <textarea class="form-control" rows="3" name="requirements" placeholder="Enter ..."></textarea>
                                </div>

                                <!-- Year Input -->
                                <div class="form-group">
                                    <label>Select Year</label>
                                    <select  class="form-control" name="year">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>


                                <!-- Category Input -->
                                <div class="form-group">
                                    <label>Select Category</label>
                                    <select  class="form-control" name="category_id">

                                        @foreach($categories as $category)
                                            <option value="{{$category->id}}">{{$category->name}}</option>1
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <a href="{{url('dashboard/categories')}}" class="btn btn-primary float-right">Show Courses</a>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </div>
@include('dashboard.footer')
