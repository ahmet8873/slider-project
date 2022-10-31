import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import {FaQuoteRight} from 'react-icons/fa'


const Rewievs = ({people,value,setValue,checkNumber}) => {
  
  const{id,image,name,title,quote}=people[value]

  return (
    <section className='rewievs'>
       
        <FiChevronLeft onClick={()=>setValue((value)=> checkNumber(value-1) )} className='right-left-btn' />
      <div className='info'  >
          <div key={id} className='single-person'>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h4>{title}</h4>
            <p>{quote}</p>
          </div>
          <FaQuoteRight className='quote'/>
      </div>
     
      <FiChevronRight onClick={()=>setValue((value)=>checkNumber(value+1) )} className='right-left-btn' />
      
    </section>
  )
}

export default Rewievs