@include('dashboard.header')

    <div class="container-fluid">
        <div class="content-wrapper">
            <div class="row">
                <div class="mx-auto col-6">

                    <!-- general form elements -->
                    <div class="card card-primary my-3">
                        <div class="card-header">
                        <h3 class="card-title">Update Course</h3>
                        </div>
                        <!-- /.card-header -->

                        <!-- form start -->
                        <form action="{{url('dashboard/categories/postupdate')}}"  method="post" enctype="multipart/form-data">
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
                                <input type="text" value="{{$category->name}}" class="form-control" name="name" id="exampleInputEmail1" placeholder="Enter email">
                            </div>

                            {{-- decription input --}}
                            <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input type="text" class="form-control" value="{{$category->description}}" name='description' id="exampleInputPassword1" placeholder="Password">
                            </div>

                            {{-- img input --}}
                            <div class="form-group">
                                <label for="inputGroupFile02">Img</label>
                                <div class="custom-file">
                                <input type="file" value="{{asset('images/'.$category->img)}}" class="form-control" name="img" id="inputGroupFile02">
                                <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                                </div>
                            </div>
                            <img src="{{asset('images/'.$category->img)}}" alt="category" style="width:4rem" class="img-fluid">

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary float-left">Update</button>
                            <a href="{{url('dashboard/categories')}}" class="btn btn-primary float-right">Show Categories</a>
                        </div>
                        <input type="hidden" name="id" value="{{$category->id}}" />
                        </form>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </div>
@include('dashboard.footer')
