import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faComments, faMagnifyingGlass, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import SearchGroup from './modals/SearchGroup'
import CreateGroup from './modals/CreateGroup'


interface Data {
    messages: string,
    sender: string,
    created_at: number
}



export default function AccordionGroups(props: {
    groups: string[],
    online: string[]
}) {
    const { groups, online } = props
    const [modal, setModal] = useState(false)
    const [createGroupModal, setCreateGroupModal] = useState(false)
    const [accordion, setAccordion] = useState<boolean>(false)
    const path: string = usePathname()
    const [arrow, setArrow] = useState(<FontAwesomeIcon icon={faChevronDown} size="1x" />)

    const accordionActive = () => {
        setAccordion(accordion ? false : true)
        setArrow(accordion ? <FontAwesomeIcon icon={faChevronDown} size="1x" /> : <FontAwesomeIcon icon={faChevronUp} size="1x" />)
    }
    return (
        <div >
            <div onClick={() => accordionActive()} className={`${(path.includes('/dashboard/GroupChat')) ? 'link-active' : 'has-text-info'} has-text-centered`}>
                <p><abbr className="is-flex is-justify-content-space-around is-align-items-end" title="Group Chat"><FontAwesomeIcon icon={faComments} size="2x" />

                    <b className="has-text-black is-size-6">Group Chat</b>{arrow}</abbr></p>
            </div>

            <div className={`${accordion ? "accordion-content" : " active-accordion"}`}>
                <div className={` is-flex is-flex-direction-column is-justify-content-space-between`}>
                    <ul className="list">
                        {(groups.length > 0) ? <>
                            {groups.map((e) => (
                                <li key={e}>
                                    <Link href={{
                                        pathname: `/dashboard/GroupChat`,
                                        query: { groupName: `${e}` },
                                    }}
                                    >

                                        <p >{e}</p>

                                    </Link>

                                </li>
                            ))}
                        </> :
                            <p>No Group Joined</p>
                        }


                    </ul>
                    <button onClick={() => setModal(true)}><FontAwesomeIcon icon={faMagnifyingGlass} className='mr-3' />Search a Group</button>
                    <button onClick={() => setCreateGroupModal(true)}><FontAwesomeIcon icon={faCirclePlus} className='mr-3' />Create a Group</button>
                </div>
            </div>
            {modal && <SearchGroup setModal={setModal} modal={modal} groups={groups} />}
            {createGroupModal && <CreateGroup setModal={setCreateGroupModal} modal={createGroupModal} />}
        </div>
    )
}