# avamind-front

## Сборка приложения в контейнере
```shell
# сборка контейнера
make docker-build
```
```shell
# провекра собранного котнейнера
make docker-dev
# приложение должно быть доступно на http://localhost:80
```
```shell
# пуш контейнера в приватное реджистри
make docker-push
# если выкидывает ошибку авторизации, необходимо залогинится
make docker-login
```
