import React from 'react'
import {MdOutlinePushPin, MdCreate, MdDelete} from 'react-icons/md'

const NoteCard = ({content,tags,  isPinned, onPinNote, onEdit, onDelete, date, title}) => {
  return (
    <div className='border rounded p-4 bg-white hover: shadow-xl transition-all ease-out'>
      <div className='flex items-center justify-between bg-yellow-300'>
        <div>
          <h6 className=' font-medium'>{title}</h6>
          <span className=' text-green-700'>{date}</span>
        </div>


        <MdOutlinePushPin 
        className={`icon-btn ${isPinned ? "text-green-600" : "text-slate-500 hover:text-green-600"
          

        }`
        
        }
        onClick={onPinNote}
        />

        
      </div>
      <p className='text-slate-600 mt-2'>{content?.slice(0, 60)}</p>


        <div className='flex items-center justify-between mt-2'>
          <div className='text-slate-500'>{tags}</div>

          <div className='flex items-center gap-2'>

            <MdCreate className='icon-btn hover:text-green-600'
            onClick={onEdit}/>

            <MdDelete className='icon-btn hover:text-red-500' onClick={onDelete}/>
          </div>

        </div>


    </div>
  )
}

export default NoteCard
