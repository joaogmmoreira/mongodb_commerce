db.produtos.find({
  $nor: [
    {
      vendidos: { $eq: 50 },
    },
    {
      tags: { $exists: 1 },
    },
  ],
},
{
  _id: 0,
  nome: 1,
  vendidos: 1, 
});