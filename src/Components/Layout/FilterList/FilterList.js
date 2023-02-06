import React from 'react';
import { Link } from 'react-router-dom';

const FilterList = () => {
    return (
        <div class="bg-slate-500 pt-4 text-white flex flex-col w-full">
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

        </div>
    )
}

export default FilterList