export default function FaqItem({ans,ques,number}){
    return(
        <li className="list-group-item">
            {/* Toggle */}
            <a className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset" data-toggle="collapse" href="#faqCollapseOne">
              {number}. {ques}
            </a>
            {/* Collapse */}
            <div className="collapse" id="faqCollapseOne" data-parent="#faqCollapseParentOne">
              <div className="mt-5">
                <p className="mb-0 font-size-lg text-gray-500">
             {ans}
                </p>
              </div>
            </div>
          </li>
    )
}