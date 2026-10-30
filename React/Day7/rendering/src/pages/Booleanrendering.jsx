

const Booleanrendering = () => {
  let isActive = true
  let values= true
  return (<>
<div className="bg-purple-700 p-5">
<div>
  {isActive?"rendering objects":"Not rendering object"}
</div>
<div>
{values&&"javascript"}
</div>
</div>

  </>
    
  )
}

export default Booleanrendering
