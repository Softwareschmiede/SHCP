"%ProgramFiles%\MongoDB\Server\3.4\bin\mongo.exe" shcp --eval "db.users.insert({ username: 'test', password: 'test', firstname: 'Test', lastname: 'Account', isAdmin: false });"
exit