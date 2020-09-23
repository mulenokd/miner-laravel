<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>mulenokd.</title>
        <!-- Fonts -->
        <link rel="stylesheet" href="/css/main.css">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <h1 id="title"> Miner Game </h1>
            
            <div class="field-container">
                @foreach ($field as $row => $cell)
                    <div class="row">
                        @foreach ($field[$row] as $key => $cell)
                            <div 
                                class="cell" 
                                id="{{$row}}_{{$key}}" 
                                onclick="openCell({{$row}}, {{$key}})"
                                oncontextmenu="setFlag({{$row}}, {{$key}})"
                            ></div>
                        @endforeach
                    </div>
                @endforeach
            </div>

        </div>
    </body>
    <script>
        var field = {!! json_encode($field) !!}
        var bombCount = {{ $bombCount }}
        var fieldSize = {{ $fieldSize }}
    </script>
    <script src="/js/main.js"></script>
</html>
