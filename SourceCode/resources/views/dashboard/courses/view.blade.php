@include('dashboard.header')
<section class="content-wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card mt-3">
                    <div class="card-header">
                        <h3 class="card-title">Courses table</h3>
                        {{-- <a href="{{url('dashboard/categories/delete-all')}}" class="btn btn-outline-warning btn-sm m-auto">Delete All</a> --}}

                        <div class="card-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <input type="text" name="table_search" class="form-control float-right" placeholder="Search">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-default">
                                    <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Year</th>
                                    <th>Last update</th>
                                    <th>Methods</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($courses as $course)
                                <tr>
                                    <td>{{$course->id}}</td>
                                    <td>{{$course->name}}</td>
                                    <td>{{$course->description}}</td>
                                    <td><img src="{{asset('images/'.$course->img)}}" style="width:3rem" alt="category" class="img-fluid"></td>
                                    <td>{{$course->updated_at}}</td>
                                    <td>
                                        <a href="{{url('dashboard/courses/delete/'.$course->id)}}" class="btn btn-outline-danger">Delete</a>
                                        <a href="{{url('dashboard/courses/update/'.$course->id)}}" class="btn btn-outline-primary"> Update</a>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
    </div>
</section>


@include('dashboard.footer')

