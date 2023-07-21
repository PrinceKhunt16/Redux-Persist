import { addCounter, removeCounter } from "@/redux/actions/counter"
import { getProducts } from "@/redux/actions/products"
import { Roboto } from "next/font/google"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
}) 

export default function Home() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.products)
  const counter = useSelector((state) => state.counter)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <>
      <div className={roboto.className}>
        <div className="counter">
          <button onClick={() => dispatch(addCounter())}>Add</button>
          <p>{counter}</p>
          <button onClick={() => dispatch(removeCounter())}>Remove</button>
        </div>
        <div>
          {state?.loading && <img src="https://i.pinimg.com/originals/71/13/89/711389337323b2d27abb5c14633267fc.jpg" />}
        </div>
        <div>
          {state?.products && 
            state?.products.map((product) => {
              return (
                <div>
                  <img src={product.image} alt="" width="200px" />
                  <h1>{product.title}</h1>
                  <h2>{product.price}</h2>
                  <h2>{product.category}</h2>
                </div>
              )
            })
          }
        </div>
        <div>
          {state?.error && <img src="https://img.freepik.com/premium-vector/glitch-text-effect-white-background-screen-glitch-vhs-effect-data-access-error_634443-8.jpg?w=360" />}
        </div>
      </div>
    </>
  )
} 