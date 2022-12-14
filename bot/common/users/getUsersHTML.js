exports.getUsersHTML = (content) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>
    <style>
      body {
            margin: 0;
            background: #F4F1F8;
        }
        table {
            border-collapse: collapse;
            line-height: 1.1;
            font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
            background:  radial-gradient(farthest-corner at 50% 50%, white, #DCECF8);
            color: #0C213B;
        }
        caption {
            font-family: annabelle, cursive;
            font-weight: bold;
            font-size: 2em;
            padding: 10px;
            color: #F3CD26;
            text-shadow: 1px 1px 0 rgba(0,0,0,.3);
        }
        caption:before, caption:after {
            content: "\\274B";
            color: #A9E2CC;
            margin: 0 10px;
        }
        th {
            padding: 10px;
            border: 1px solid #A9E2CC;
        }
        td {
            font-size: 0.8em;
            padding: 5px 7px;
            border: 1px solid #A9E2CC;
        }
</style>
</head>
<body>
<table>
<caption>Список пользователей</caption>
<tr><th>№</th>
<th>ID пользователя</th>
<th>Никнейм пользователя</th>
<th>Имя пользователя</th>
<th>Фамилия пользователя</th>
<th>Время регистрации</th></tr>
${content}
</table>
</body>
</html>`;
}