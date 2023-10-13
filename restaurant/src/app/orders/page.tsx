import React from 'react'

const OrderPages = () => {
  return (
    <div className='p-4 lx:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th> Date</th>
            <th> Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-1'>123654789</td>
            <td className='py-6 px-1'>19/10/2023</td>
            <td className='py-6 px-1'>$20.00</td>
            <td className='hidden md:block'>Margarita Pizza Coca Cola</td>
            <td className='py-6 px-1'>(aprox 10mn)</td>

          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>123654789</td>
            <td className='py-6 px-1'>19/10/2023</td>
            <td className='py-6 px-1'>$20.00</td>
            <td className='hidden md:block'>Margarita Pizza Coca Cola</td>
            <td className='py-6 px-1'>(aprox 10mn)</td>

          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>123654789</td>
            <td className='py-6 px-1'>19/10/2023</td>
            <td className='py-6 px-1'>$20.00</td>
            <td className='hidden md:block'>Margarita Pizza Coca Cola</td>
            <td className='py-6 px-1'>(aprox 10mn)</td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderPages