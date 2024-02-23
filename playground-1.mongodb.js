use("demo");

// db.stuff.insert(
//     {
//         name: "Rocky",
//         roll: 1,
//         class: 1,
//         city: "dhaka",
//         salary: 50000
//     }
// )

// db.stuff.insertMany(

//     [
//         {
//           "id": 11,
//           "name": "Reit",
//           "designation": "Software Engineer",
//           "salary": 60000,
//           "city": "New York"
//         },
//         {
//           "id": 12,
//           "name": "R. Smith",
//           "designation": "Data Scientist",
//           "salary": 80000,
//           "city": "San Francisco"
//         }

//       ]

// )

// db.stuff.find({})

// db.stuff.aggregate([])

// db.stuff.aggregate(
//     [
//         {
//             $count: 'total'
//         }
//     ]
// )

// db.stuff.aggregate(
//     [
//         {
//             $sort: {
//               salary: -1
//             }
//         }
//     ]
// )

// db.stuff.aggregate(
//     [
//         {
//             $limit: 4
//         }
//     ]
// )

// db.stuff.aggregate(
//     [
//         {
//             $sort: {
//               _id: 1
//             }
//         },
//         {
//             $limit: 5
//         }
//     ]
// )

// db.stuff.aggregate(
//     [
//         {
//             $match: {
//               salary: {
//                 $gt: 80000
//               }
//             }
//         }
//     ]
// )

// db.stuff.aggregate(
//     [
//         {
//             $match: {
//               salary: {
//                 $lt: 80000
//               }
//             }
//         },
//         {
//             $match: {
//               city: "New York"
//             }
//         }
//     ]
// )

// Nested matching
// db.stuff.aggregate(
//     [
//         {
//             $match: {
//               $and: [
//                 {
//                     salary: {
//                         $lt: 80000
//                     }
//                 },
//                 {
//                     city: "New York"
//                 }
//               ]
//             }
//         }
//     ]
// )

//* like search
// db.stuff.aggregate(
//     [
//         {
//             $match: {
//               name: /J/
//             }
//         }
//     ]
// )

// db.stuff.find(
//     {
//         name: /R/
//     }
// )

//* match in
// db.stuff.aggregate(
//     [
//         {
//             $match: {
//               name: {
//                 $in: ["Rocky", "Reit"]
//               }
//             }
//         }
//     ]
// )

//* projection
// db.stuff.aggregate(
//     [
//         {
//             $project: {
//               _id: 0,
//               name: 1
//             }
//         }
//     ]
// )

// db.stuff.find(
//     {},
//     {
//         _id: 0,
//         name: 1,
//         designation: 1
//     }
// )

//* skip
// db.stuff.aggregate(
//     [
//         {$skip: 0},
//         {$limit: 2}
//     ]
// )

// db.stuff.find({}).skip(3).limit(3)

//* Group By

// db.stuff.aggregate(
//     [
//         {
//             $group: {
//               _id: "$salary"
//               }

//         }
//     ]
// )

//* Group By Sum of salary

// db.stuff.aggregate(
//     [
//         {
//             $group: {_id: "$designation",total: {$sum: "$salary"}}
//         }
//     ]
// )

// * avg
// db.stuff.aggregate(
//     [
//         {
//             $group: {
//               _id: "$city",
//               avg: {
//                 $avg: "$salary"
//               }
//             }
//         }
//     ]
// )

// * max
// db.stuff.aggregate(
//     [
//         {
//             $group: {
//               _id: "$city",
//               max: {
//                 $max: "$salary"
//               }
//             }
//         }
//     ]
// )

//* without group by sum avg max min
// db.stuff.aggregate(
//     [
//         {
//             $group: {
//               _id: 0,
//               max: {
//                 $max: "$salary"
//               }
//             }
//         }
//     ]
// )

// db.stuff.aggregate(
//     [
//         {
//             $group: {
//               _id: 0,
//               sum: {
//                 $sum: "$salary"
//               }
//             }
//         }
//     ]
// )



// db.stuff.aggregate([
//   {
//     $group: {
//       _id: {
//         designation: "$designation",
//         city: "$city",
//       },
//       sum: {
//         $sum: "$salary",
//       },
//       avg: {
//         $avg: "$salary",
//       },
//       max: {
//         $max: "$salary",
//       },
//       min: {
//         $min: "$salary",
//       },
//     },
//   },
// ]);



//* join by lookup

// db.products.aggregate(
//     [
//         {
//             $lookup: {
//               from: "categories",
//               localField: "CategoryID",
//               foreignField: "CategoryID",
//               as: "catDetails"
//             }
//         },
//         {
//             $lookup: {
//               from: "brands",
//               localField: "BrandID",
//               foreignField: "BrandID",
//               as: "brandDetails"
//             }
//         }
//     ]
// )


// * facet

// db.products.aggregate(
//     [
//         {
//             $facet: 
//             {
//               "total":[{$count: "total"}],
//               "data":[],
//               "samsung": [{$match: {"BrandID": 1652474116}}]
//             }
//         }
//     ]
// )



// db.products.aggregate(
//     [
//         {
//             $match: {
//               Unit: "lt"
//             }
//         },
//         {
//             $addFields: {
//               "NewField": {
//                 $pow:[10, 3]
//               }
//             }
//         }
//     ]
// )


// db.products.aggregate(
//     [
//         {
//             $match: {
//               Unit: "lt"
//             }
//         },
//         {
//             $addFields: {
//              "NewField":{
//                 $dayOfMonth: "$CreatedDate"
//              }
//             }
//         }
//     ]
// )
