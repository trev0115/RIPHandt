# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#
#   Mayor.create(name: 'Emanuel', city: cities.first)

scores =  Score.create([
        {user_id: 1, score: 2}, 
        {user_id: 1, score: 11}, 
        {user_id: 2, score: 30432}, 
        {user_id: 3, score: 520}, 
        {user_id: 1, score: 234}, 
        {user_id: 4, score: 88}, 
        {user_id: 6, score: 89}, 
        {user_id: 1, score: 99}, 
        {user_id: 1, score: 123}, 
        {user_id: 1, score: 333},
        {user_id: 7, score: 5000}])
        
users = User.create([
        {name: 'Jill'}, 
        {name: 'Ben'}, 
        {name: 'Bill'}, 
        {name: 'Joe'}, 
        {name: 'Tomas'}, 
        {name: 'Benjamin'}])



