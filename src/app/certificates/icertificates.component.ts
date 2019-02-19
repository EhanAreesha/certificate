
interface ICertificateList {
    Id?:string;
    ResourceId?:string;
    Title?:string;
    ResourceType?:string;
    IssuedDate?:string;
}

interface ICertificates {
    certificateList?:ICertificateList[];
    certificateTempList?:ICertificateList[];
    totalRecords?:number;
}