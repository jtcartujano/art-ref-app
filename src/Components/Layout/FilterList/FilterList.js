import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const FilterList = () => {
    return (
        <div class="bg-slate-500 pt-4 pl-6 rounded text-white flex flex-col w-full">
            <p class="font-sans pb-4">Filter by category: </p>

            <div class="">
                <input class="mr-1" type="checkbox" value="anatomy" />  
                <label for="helper-checkbox" >Anatomy</label>
            </div>
            
            <div class="">
                <input class="mr-1" type="checkbox" value="backgrounds" />  
                <label for="helper-checkbox" >Backgrounds</label>
            </div>
            
            <div class="">
                <input class="mr-1" type="checkbox" value="posing" />  
                <label for="helper-checkbox" >Posing</label>
            </div>
            
            <div class="">
                <input class="mr-1" type="checkbox" value="colourandshading" />  
                <label for="helper-checkbox" >Colour and Shading</label>  
            </div>
            
            <div class="">
                <button class="bg-sky-500 hover:bg-sky-700 ...">
                    Save changes
                </button>
            </div>

            {/* Let's try something here. I wanna try to occupy these fields with given data. */}

            <div class="flex">
                <input type="checkbox" id="anatomy" class="peer hidden" />
                <label for="anatomy" class="select-none cursor-pointer rounded-lg border-2 border-gray-200
                py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">Anatomy</label>
            </div>

            <div class="flex">
                <input type="checkbox" id="backgrounds" class="peer hidden" />
                <label for="backgrounds" class="select-none cursor-pointer rounded-lg border-2 border-gray-200
                py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">Backgrounds</label>
            </div>

            <div class="flex">
                <input type="checkbox" id="choose-me" class="peer hidden" />
                <label for="choose-me" class="select-none cursor-pointer rounded-lg border-2 border-gray-200
                py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">Posing</label>
            </div>

            <div class="flex">
                <input type="checkbox" id="choose-me" class="peer hidden" />
                <label for="choose-me" class="select-none cursor-pointer rounded-lg border-2 border-gray-200
                py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">Colour and Shading</label>
            </div>

            <div class="flex">
                <input type="checkbox" id="choose-me" class="peer hidden" />
                <label for="choose-me" class="select-none cursor-pointer rounded-lg border-2 border-gray-200
                py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> Check me </label>
            </div>

            {/* { tags && tags.map(tag => {
                return(
                    <div class="flex">
                        <input type="checkbox" id="choose-me" class="peer hidden" />
                        <label for="choose-me" class="select-none cursor-pointer rounded-lg border-2 border-gray-200
                        py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> {tag.name} </label>
                    </div>
                )
            })} */}

        </div>
    )
}

export default FilterList