import React from "react";

export default function ProductNew() {
  return (
    <div>
      <div class="flex p-1">
        <div class="flex-none w-44 relative">
          <img
            src="https://tailwindcss.com/_next/static/media/fancy-suit-jacket.380b02296e758f6a462590ecfb936789.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <form class="flex-auto py-7 px-8">
          <div class="flex flex-wrap items-baseline">
            <h1 class="w-full flex-none text-3xl text-black mb-1.5">
              Fancy Suit Jacket
            </h1>
            <div class="text-lg leading-6 text-black">$600.00</div>
            <div class="text-sm text-gray-500 ml-3">In stock</div>
          </div>
          <div class="flex items-baseline mt-9 py-4 border-t border-gray-100">
            <div class="space-x-2 flex text-sm font-light text-black">
              <label>
                <input
                  class="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                XS
              </label>
              <label>
                <input
                  class="w-9 h-9 flex items-center justify-center rounded-full"
                  name="size"
                  type="radio"
                  value="s"
                />
                S
              </label>
              <label>
                <input
                  class="w-9 h-9 flex items-center justify-center rounded-full"
                  name="size"
                  type="radio"
                  value="m"
                />
                M
              </label>
              <label>
                <input
                  class="w-9 h-9 flex items-center justify-center rounded-full"
                  name="size"
                  type="radio"
                  value="l"
                />
                L
              </label>
              <label>
                <input
                  class="w-9 h-9 flex items-center justify-center rounded-full"
                  name="size"
                  type="radio"
                  value="xl"
                />
                XL
              </label>
            </div>
            <div class="ml-auto text-sm font-light text-gray-500">
              Size Guide
            </div>
          </div>
          <div class="flex space-x-3 mb-3 text-sm font-semibold uppercase">
            <div class="flex-auto flex space-x-3">
              <button
                class="w-1/2 flex items-center justify-center bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                class="w-1/2 flex items-center justify-center border border-gray-200"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              class="flex-none flex items-center justify-center w-12 h-12 text-gray-900 border border-gray-200"
              type="button"
              aria-label="like"
            >
              <svg width="20" height="20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p class="text-sm text-gray-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
}
