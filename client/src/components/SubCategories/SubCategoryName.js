import React from 'react'
import SubCategories from './SubCategories'

function SubCategoryName({category}) {
  return (
    <div>
{category.name}
{category?.children?.length!==0 && <SubCategories categoryChildren={category?.children}></SubCategories>}
    </div>
  )
}

export default SubCategoryName