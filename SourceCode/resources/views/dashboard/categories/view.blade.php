@include('dashboard.header')
<section class="content-wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card mt-3">
                    <div class="card-header">
                        <h3 class="card-title">Categories table</h3>
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
                            <th>Last update</th>
                            <th>Methods</th>

                        </tr>
                        </thead>
                        <tbody>

                        @foreach ($categories as $category)
                        <tr>
                            <td>{{$category->id}}</td>
                            <td>{{$category->name}}</td>
                            <td>{{$category->description}}</td>
                            <td><img src="{{asset('images/'.$category->img)}}" style="width:3rem" alt="category" class="img-fluid"></td>
                            <td>{{$category->updated_at}}</td>
                            <td>
                                <form action="{{url('dashboard/categories/delete/'.$category->id)}}" method="post">
                                    @csrf
                                    @method('delete')
                                    <button type="submit" class="btn btn-outline-danger">delete</button>
                                </form>
                                <a href="{{url('dashboard/categories/update/'.$category->id)}}" class="btn btn-outline-primary"> Update</a>
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

