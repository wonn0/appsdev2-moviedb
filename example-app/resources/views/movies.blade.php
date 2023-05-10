<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Movies 'R' Us Movie Database</h1>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Movie ID</th>
                <th>Movie Title</th>
                <th>Year Made</th>
                <th>Length</th>
                <th>Language</th>
                <th>Date of Release</th>
                <th>Country Released</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($data as $movie)
                <tr>
                    <td>{{ $movie->mov_id }}</td>
                    <td>{{ $movie->mov_title }}</td>
                    <td>{{ $movie->mov_year }}</td>
                    <td>{{ $movie->mov_time }}</td>
                    <td>{{ $movie->mov_lang }}</td>
                    <td>{{ $movie->mov_dt_rel }}</td>
                    <td>{{ $movie->mov_rel_country }}</td>
                    {{-- <td><a href="{{ route('movie', $movie->mov_id) }}" class="btn btninfo">Edit</a> --}}
                    <td><a href="" class="btn btninfo">View Details</a>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
