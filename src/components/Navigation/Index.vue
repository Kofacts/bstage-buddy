<template>
    <div class="border-t-[0.1px] border-nano-light fixed bottom-0 w-full pt-[15px] pl-[30px] pr-[30px] pb-[27px] flex justify-between items-center"> 
        <router-link :to="{name: 'home'}" class="flex items-center justify-center flex-col gap-[5px]"> 
            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M1 27V11.9032L13.61 1L25.8132 11.9032V27H1Z" stroke="#E7EEBE" stroke-width="1.25"/>
            </svg>
            <span class="text-[14px]">Home</span>
        </router-link>
        <router-link :to="{name: 'scripts'}" class="flex items-center justify-center flex-col gap-[5px]"> 
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_752_1494" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19356 0.375H3.56856V1V4.35484H0V27H20.9677V24.2702H25.1613H25.7863V23.6452V1V0.375H25.1613H4.19356ZM20.9677 23.0202H24.5363V1.625H4.81856V4.35484H20.9677V23.0202Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19356 0.375H3.56856V1V4.35484H0V27H20.9677V24.2702H25.1613H25.7863V23.6452V1V0.375H25.1613H4.19356ZM20.9677 23.0202H24.5363V1.625H4.81856V4.35484H20.9677V23.0202Z" fill="#3E1821"/>
                <path d="M3.56856 0.375V-0.875H2.31856V0.375H3.56856ZM3.56856 4.35484V5.60484H4.81856V4.35484H3.56856ZM0 4.35484V3.10484H-1.25V4.35484H0ZM0 27H-1.25V28.25H0V27ZM20.9677 27V28.25H22.2177V27H20.9677ZM20.9677 24.2702V23.0202H19.7177V24.2702H20.9677ZM25.7863 24.2702V25.5202H27.0363V24.2702H25.7863ZM25.7863 0.375H27.0363V-0.875H25.7863V0.375ZM20.9677 23.0202H19.7177V24.2702H20.9677V23.0202ZM24.5363 23.0202V24.2702H25.7863V23.0202H24.5363ZM24.5363 1.625H25.7863V0.375H24.5363V1.625ZM4.81856 1.625V0.375H3.56856V1.625H4.81856ZM4.81856 4.35484H3.56856V5.60484H4.81856V4.35484ZM20.9677 4.35484H22.2177V3.10484H20.9677V4.35484ZM3.56856 1.625H4.19356V-0.875H3.56856V1.625ZM4.81856 1V0.375H2.31856V1H4.81856ZM4.81856 4.35484V1H2.31856V4.35484H4.81856ZM0 5.60484H3.56856V3.10484H0V5.60484ZM1.25 27V4.35484H-1.25V27H1.25ZM20.9677 25.75H0V28.25H20.9677V25.75ZM19.7177 24.2702V27H22.2177V24.2702H19.7177ZM25.1613 23.0202H20.9677V25.5202H25.1613V23.0202ZM25.7863 23.0202H25.1613V25.5202H25.7863V23.0202ZM24.5363 23.6452V24.2702H27.0363V23.6452H24.5363ZM24.5363 1V23.6452H27.0363V1H24.5363ZM24.5363 0.375V1H27.0363V0.375H24.5363ZM25.1613 1.625H25.7863V-0.875H25.1613V1.625ZM4.19356 1.625H25.1613V-0.875H4.19356V1.625ZM20.9677 24.2702H24.5363V21.7702H20.9677V24.2702ZM25.7863 23.0202V1.625H23.2863V23.0202H25.7863ZM24.5363 0.375H4.81856V2.875H24.5363V0.375ZM3.56856 1.625V4.35484H6.06856V1.625H3.56856ZM4.81856 5.60484H20.9677V3.10484H4.81856V5.60484ZM19.7177 4.35484V23.0202H22.2177V4.35484H19.7177Z" fill="#E7EEBE" mask="url(#path-1-inside-1_752_1494)"/>
                <path d="M13.0001 7.70972H7.9678M2.93555 10.2258H18.0323M13.0001 14H7.9678M2.93555 16.5162H18.0323M2.93555 22.8065H18.0323M13.0001 20.2904H7.9678" stroke="#E7EEBE" stroke-width="1.25"/>
            </svg>
            <span class="text-[14px]">Script</span>
        </router-link>
        <router-link :to="{name: 'rehearse'}" class="flex items-center justify-center flex-col gap-[5px]"> 
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.43382 13.0894C7.03788 11.4943 11.4013 7.06497 12.9057 1.43484C14.5005 7.03827 18.9346 11.4039 24.5653 12.9104C18.9626 14.5031 14.5987 18.9354 13.0943 24.5653C11.4995 18.9615 7.06491 14.5957 1.43382 13.0894Z" stroke="#E7EEBE" stroke-width="1.25"/>
            </svg>
            <span class="text-[14px]">Rehersal</span>
        </router-link>
        <router-link :to="{name: 'stats'}" class="flex items-center justify-center flex-col gap-[5px]"> 
            <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.1631 2.7248L24.9923 3.35454M24.9923 3.35454L24.3557 7.14252M24.9923 3.35454L9.36214 14.4084M4.18652 2.43043L4.18652 28.0303L35.2403 28.0303M10.0091 20.3503L10.0091 28.0303M22.9482 12.6704L22.9482 28.0303M29.4177 8.83038L29.4177 28.0303M16.4786 17.7903L16.4786 28.0303" stroke="#E7EEBE"/>
            </svg>
            <span class="text-[14px]">Stats</span>
        </router-link>
    </div>
</template>

<style scoped>
a {
    opacity: .6;
}
a.router-link-exact-active {
    opacity: 1;
}
</style>