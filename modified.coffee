if typeof Mongo is 'undefined'
  Mongo = {}
  Mongo.Collection = Meteor.Collection
  
Mongo.Collection.prototype.ndxModified = (options = {}) ->
  collection = @
  
  collection.before.insert (userId, doc) ->
    doc.createdAt = new Date()
    doc.createdBy = userId
    return
    
  collection.before.update (userId, doc, fieldNames, modifier, options) ->
    modifier.$set.updatedAt = new Date()
    modifier.$set.updatedBy = userId
    return
  