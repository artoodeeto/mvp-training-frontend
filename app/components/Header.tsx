import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
          <svg
            width="155.79"
            height="32.581"
            viewBox="0 0 155.79 32.581"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="svgGroup"
              strokeLinecap="round"
              fillRule="evenodd"
              fontSize="9pt"
              stroke="#000"
              strokeWidth="0.25mm"
              fill="#000"
            >
              <path
                d="M 23.94 2.565 L 22.365 6.12 Q 20.475 5.085 18.518 4.41 A 12.312 12.312 0 0 0 15.773 3.816 A 15.401 15.401 0 0 0 14.175 3.735 A 9.058 9.058 0 0 0 10.806 4.352 A 8.513 8.513 0 0 0 9.135 5.243 A 9.133 9.133 0 0 0 6.739 7.681 A 12.356 12.356 0 0 0 5.648 9.675 A 14.226 14.226 0 0 0 4.727 12.704 Q 4.365 14.583 4.365 16.83 A 20.48 20.48 0 0 0 4.558 19.719 Q 4.841 21.698 5.535 23.288 A 10.881 10.881 0 0 0 6.855 25.559 A 8.596 8.596 0 0 0 8.775 27.405 A 8.069 8.069 0 0 0 13.189 28.839 A 9.897 9.897 0 0 0 13.545 28.845 Q 16.065 28.845 18.023 27.788 Q 19.521 26.978 20.532 26.129 A 8.972 8.972 0 0 0 21.105 25.605 L 21.105 18.72 L 14.58 18.72 L 14.58 15.345 L 25.155 15.345 L 25.155 32.04 L 21.375 32.04 L 21.375 28.89 A 16.147 16.147 0 0 1 19.405 30.371 A 21.309 21.309 0 0 1 17.55 31.433 Q 15.3 32.58 12.555 32.58 A 11.957 11.957 0 0 1 8.365 31.86 A 11.03 11.03 0 0 1 6.075 30.69 A 12.1 12.1 0 0 1 2.506 26.957 A 15.278 15.278 0 0 1 1.62 25.313 A 16.888 16.888 0 0 1 0.312 21.006 A 23.327 23.327 0 0 1 0 17.1 A 25.336 25.336 0 0 1 0.376 12.637 A 19.157 19.157 0 0 1 1.71 8.213 A 14.729 14.729 0 0 1 4.313 4.186 A 13.255 13.255 0 0 1 6.638 2.183 A 12.525 12.525 0 0 1 11.754 0.203 A 16.679 16.679 0 0 1 14.4 0 A 20.366 20.366 0 0 1 17.086 0.169 A 15.124 15.124 0 0 1 19.62 0.72 Q 21.915 1.44 23.94 2.565 Z M 80.55 29.385 L 82.71 25.785 Q 84.33 27.135 86.355 27.99 A 10.507 10.507 0 0 0 88.772 28.67 A 14.453 14.453 0 0 0 91.08 28.845 Q 93.451 28.845 95.099 28.122 A 6.165 6.165 0 0 0 96.21 27.495 A 4.626 4.626 0 0 0 97.469 26.188 Q 98.061 25.24 98.098 24.015 A 5.452 5.452 0 0 0 98.1 23.85 A 5.373 5.373 0 0 0 97.948 22.548 A 4.417 4.417 0 0 0 97.56 21.533 Q 97.023 20.525 95.483 19.562 A 11.853 11.853 0 0 0 95.468 19.553 Q 94.065 18.679 91.47 17.676 A 53.359 53.359 0 0 0 90.9 17.46 A 40.686 40.686 0 0 1 88.827 16.591 Q 87.811 16.13 86.968 15.665 A 17.773 17.773 0 0 1 85.725 14.918 A 9.869 9.869 0 0 1 84.335 13.816 Q 83.562 13.074 83.087 12.234 A 5.986 5.986 0 0 1 82.958 11.993 A 7.5 7.5 0 0 1 82.273 9.89 A 10.318 10.318 0 0 1 82.125 8.1 Q 82.125 5.85 83.363 4.028 A 7.73 7.73 0 0 1 85.367 2.031 A 10.523 10.523 0 0 1 87.008 1.103 Q 89.189 0.104 92.202 0.01 A 20.353 20.353 0 0 1 92.835 0 Q 95.625 0 97.853 0.563 Q 100.08 1.125 102.195 2.16 L 100.62 5.805 Q 99.09 4.905 97.043 4.298 Q 94.995 3.69 92.745 3.69 A 12.234 12.234 0 0 0 90.932 3.816 Q 89.214 4.074 88.065 4.86 A 4.456 4.456 0 0 0 87.092 5.744 A 3.312 3.312 0 0 0 86.355 7.875 A 4.709 4.709 0 0 0 86.487 9.01 A 3.853 3.853 0 0 0 86.85 9.945 Q 87.325 10.809 88.691 11.631 A 10.575 10.575 0 0 0 88.808 11.7 Q 90.029 12.414 92.271 13.285 A 58.507 58.507 0 0 0 93.195 13.635 Q 95.68 14.559 97.431 15.55 A 15.977 15.977 0 0 1 98.753 16.38 A 11.72 11.72 0 0 1 100.121 17.495 Q 101.121 18.453 101.655 19.508 Q 102.51 21.195 102.51 23.355 A 9.77 9.77 0 0 1 102.21 25.83 A 7.697 7.697 0 0 1 101.048 28.35 A 8.828 8.828 0 0 1 97.929 31.06 A 10.96 10.96 0 0 1 96.998 31.5 Q 94.41 32.58 91.08 32.58 A 21.315 21.315 0 0 1 87.581 32.304 A 17.122 17.122 0 0 1 85.095 31.703 Q 82.395 30.825 80.55 29.385 Z M 60.21 32.04 L 56.16 32.04 L 56.16 8.64 L 60.075 8.64 L 60.075 12.555 Q 61.335 10.665 63.293 9.383 A 7.792 7.792 0 0 1 66.49 8.202 A 10.183 10.183 0 0 1 67.95 8.1 Q 71.91 8.1 73.868 10.485 Q 75.724 12.747 75.82 16.384 A 15.194 15.194 0 0 1 75.825 16.785 L 75.825 32.04 L 71.775 32.04 L 71.775 17.235 Q 71.775 15.169 70.974 13.769 A 4.935 4.935 0 0 0 70.583 13.185 Q 69.39 11.655 67.275 11.655 A 5.905 5.905 0 0 0 64.193 12.539 A 7.809 7.809 0 0 0 63.36 13.118 Q 61.515 14.58 60.21 16.56 L 60.21 32.04 Z M 140.175 32.04 L 136.125 32.04 L 136.125 8.64 L 140.04 8.64 L 140.04 12.555 Q 141.3 10.665 143.258 9.383 A 7.792 7.792 0 0 1 146.455 8.202 A 10.183 10.183 0 0 1 147.915 8.1 Q 151.875 8.1 153.833 10.485 Q 155.689 12.747 155.785 16.384 A 15.194 15.194 0 0 1 155.79 16.785 L 155.79 32.04 L 151.74 32.04 L 151.74 17.235 Q 151.74 15.169 150.939 13.769 A 4.935 4.935 0 0 0 150.548 13.185 Q 149.355 11.655 147.24 11.655 A 5.905 5.905 0 0 0 144.158 12.539 A 7.809 7.809 0 0 0 143.325 13.118 Q 141.48 14.58 140.175 16.56 L 140.175 32.04 Z M 50.625 22.005 L 34.245 22.005 A 10.84 10.84 0 0 0 34.758 24.266 Q 35.359 25.982 36.54 27.135 Q 38.43 28.98 41.535 28.98 A 16.528 16.528 0 0 0 43.459 28.873 A 12.409 12.409 0 0 0 45.18 28.553 Q 46.8 28.125 48.285 27.45 L 49.23 30.915 A 18.346 18.346 0 0 1 47.28 31.647 A 23.338 23.338 0 0 1 45.585 32.108 Q 43.56 32.58 41.04 32.58 A 12.743 12.743 0 0 1 37.555 32.128 A 9.499 9.499 0 0 1 33.053 29.363 Q 30.105 26.145 30.105 20.34 A 15.911 15.911 0 0 1 30.48 16.82 A 12.978 12.978 0 0 1 31.433 14.063 A 11.089 11.089 0 0 1 33.69 10.876 A 10.299 10.299 0 0 1 35.145 9.698 A 9.472 9.472 0 0 1 39.762 8.135 A 11.792 11.792 0 0 1 40.68 8.1 Q 44.055 8.1 46.283 9.563 Q 48.51 11.025 49.635 13.5 Q 50.76 15.975 50.76 18.945 A 33.842 33.842 0 0 1 50.629 21.959 A 31.008 31.008 0 0 1 50.625 22.005 Z M 124.38 10.53 L 124.38 8.64 L 128.07 8.64 L 128.07 26.37 Q 128.07 28.08 128.903 28.598 Q 129.735 29.115 130.725 29.115 L 129.87 32.265 A 7.975 7.975 0 0 1 127.951 32.053 Q 125.329 31.401 124.65 28.755 A 9.588 9.588 0 0 1 123.251 30.297 A 12.824 12.824 0 0 1 121.838 31.388 A 6.718 6.718 0 0 1 119.609 32.334 Q 118.701 32.547 117.643 32.576 A 12.242 12.242 0 0 1 117.315 32.58 Q 114.39 32.58 112.005 31.095 A 10.326 10.326 0 0 1 108.669 27.708 A 12.565 12.565 0 0 1 108.203 26.888 A 12.252 12.252 0 0 1 107.019 23.314 A 16.49 16.49 0 0 1 106.785 20.475 A 14.914 14.914 0 0 1 107.234 16.754 A 12.586 12.586 0 0 1 108.203 14.175 Q 109.62 11.385 112.118 9.743 Q 114.615 8.1 117.855 8.1 A 10.163 10.163 0 0 1 120.012 8.321 A 8.416 8.416 0 0 1 121.523 8.798 Q 123.165 9.495 124.38 10.53 Z M 124.02 26.055 L 124.02 13.5 Q 122.805 12.645 121.343 12.128 Q 119.88 11.61 118.26 11.61 A 7.166 7.166 0 0 0 116.023 11.949 A 6.311 6.311 0 0 0 114.458 12.713 A 7.335 7.335 0 0 0 112.199 15.153 A 8.983 8.983 0 0 0 111.87 15.773 A 9.298 9.298 0 0 0 111.081 18.327 A 12.455 12.455 0 0 0 110.925 20.34 A 11.505 11.505 0 0 0 111.162 22.719 A 9.154 9.154 0 0 0 111.87 24.818 A 7.921 7.921 0 0 0 113.268 26.863 A 7.063 7.063 0 0 0 114.48 27.878 Q 116.145 28.98 118.215 28.98 Q 119.925 28.98 121.455 28.148 A 8.753 8.753 0 0 0 123.579 26.549 A 8.132 8.132 0 0 0 124.02 26.055 Z M 34.2 18.72 L 47.025 18.72 A 10.96 10.96 0 0 0 46.843 16.657 Q 46.468 14.698 45.315 13.455 Q 43.605 11.61 40.59 11.61 A 6.111 6.111 0 0 0 38.29 12.031 A 5.636 5.636 0 0 0 36.27 13.433 Q 34.847 14.95 34.359 17.604 A 14.409 14.409 0 0 0 34.2 18.72 Z"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center">
          <Navbar />
          <button className="flex flex-col ml-4 lg:hidden">
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
