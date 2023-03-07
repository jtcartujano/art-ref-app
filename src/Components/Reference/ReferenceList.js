import React from 'react';
import ReferencePreview from './ReferencePreview.js';

const ReferenceList = ({references}) => {
    return (
        <div class="grid grid-cols-3 gap-4">
            {/* nested grid to display the thumbnails */}
            { references && references.map(reference => {
                return(
                    <ReferencePreview reference={reference} />
                )
            })}

        </div>
    )
}

export default ReferenceList;