# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#
#   Mayor.create(name: 'Emanuel', city: cities.first)

scores =  Score.create([
        {user_id: 10, score: 2}, 
        {user_id: 10, score: 11}, 
        {user_id: 20, score: 30432}, 
        {user_id: 30, score: 520}, 
        {user_id: 10, score: 234}, 
        {user_id: 40, score: 88}, 
        {user_id: 60, score: 89}, 
        {user_id: 10, score: 99}, 
        {user_id: 10, score: 123}, 
        {user_id: 10, score: 333}])

users = User.create([
        {name: 'Jill'}, 
        {name: 'Ben'}, 
        {name: 'Bill'}, 
        {name: 'Joe'}, 
        {name: 'Tomas'}, 
        {name: 'Benjamin'}])



