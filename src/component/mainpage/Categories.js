import React from "react"
import fashion from '../assets/categorieimage/fashion.png'
import books from '../assets/categorieimage/books.png'
import cars from '../assets/categorieimage/cars.png'
import giftbox from '../assets/categorieimage/giftbox.png'
import makeupitems from '../assets/categorieimage/makeupitems.png'
import monitor from '../assets/categorieimage/monitor.png'
import musics from '../assets/categorieimage/musics.png'
import pets from '../assets/categorieimage/pets.png'
import stockbasket from '../assets/categorieimage/stockbasket.png'
import toys from '../assets/categorieimage/toys.png'






const Categories = () => {
  const data = [
    {
      cateImg: fashion,
      cateName: "Fashion",
    },
    {
      cateImg: stockbasket,
      cateName: "Electronic",
    },
    {
      cateImg:cars,
      cateName: "Cars",
    },
    {
      cateImg: stockbasket,
      cateName: "Home & Garden",
    },
    {
      cateImg: giftbox,
      cateName: "Gifts",
    },
    {
      cateImg:musics,
      cateName: "Music",
    },
    {
      cateImg: makeupitems,
      cateName: "Health & Beauty",
    },
    {
      cateImg: pets,
      cateName: "Pets",
    },
    {
      cateImg:toys,
      cateName: "Baby Toys",
    },
    {
      cateImg: monitor,
      cateName: "Groceries",
    },
    {
      cateImg: books,
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories