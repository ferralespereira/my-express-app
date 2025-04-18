## This is a webapp in nodeJs to be deployed in aws eb (elastic beanstack)

### To acces to postgres
* After install postgres
* Create a password for postgres user
```sh
sudo -u postgres psql
\password
```

* then access to postgres
```sh
psql -U postgres -h localhost
``` 