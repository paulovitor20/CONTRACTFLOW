class LayoutManager{

    static setTitle(title){

        document.title=`ContractFlow • ${title}`;

    }

    static setPageTitle(title){

        const page=document.querySelector(".page-title");

        if(page){

            page.innerHTML=title;

        }

    }

}