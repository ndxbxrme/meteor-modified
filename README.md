# ndxbxrme:modified

Simply adds updatedAt/updatedBy and createdAt/createdBy fields to a collection.

### install

`meteor add ndxbxrme:modified`

### usage

```coffeescript
  Things = new Mongo.Collection 'things'
  Things.ndxModified()
```