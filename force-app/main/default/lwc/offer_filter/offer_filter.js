import { LightningElement } from 'lwc';

export default class Offer_filter extends LightningElement {
    tabs=[
        {
            label: 'All',
            slug: 'all',
            tabTitle: 'All offers'
        },
        {
            label: 'Accommadation',
            slug: 'accommadation',
            tabTitle: 'Accommadation'
        },
        {
            label: 'Dining',
            slug: 'dining',
            tabTitle: 'Dining'
        },
        {
            label: 'Fitness & Spa',
            slug: 'fitness_spa',
            tabTitle: 'Fitness & Spa'
        },
        {
            label: 'Meeting & Event',
            slug: 'meeting_event',
            tabTitle: 'Meeting & Event'
        },
        {
            label: 'Other',
            slug: 'other',
            tabTitle: 'Other'
        },
    ]


    tabContents=[]
    tabTitle

    contentTabs=[
        {
            image:'',
            title:'',
            description:'',
            link_detail:'',
            slug:['accommadation']
        },
        {
            image:'',
            title:'',
            description:'',
            link_detail:'',
            slug:['accommadation','dining']
        }
    ]


    changeTabFunc(slug){
        this.tabContents=this.contentTabs.filter((content)=>content.slug.includes(slug))
    }

    handleChangeTab({content,tabTitle}){
        this.tabContents=content
        this.tabTitle = tabTitle
    }
}