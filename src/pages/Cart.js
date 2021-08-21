import React from 'react'

function Cart() {
    return (
        <div class="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100">
            <h2 class="text-xl font-semibold">Your cart</h2>
            <ul class="flex flex-col divide-y divide-coolGray-700">
            </ul>
            <div class="space-y-1 text-right">
                <p>Total amount:
                    <span class="font-semibold"> 357 €</span>
                </p>
                <p class="text-sm dark:text-coolGray-400">Not including taxes and shipping costs</p>
            </div>
            <div class="flex justify-end space-x-4">
                <button class="px-6 py-2 border rounded-md dark:border-violet-400">Back
                    <span class="sr-only sm:not-sr-only">to shop</span>
                </button>
                <button class="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                    <span class="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart
