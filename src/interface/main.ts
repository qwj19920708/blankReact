export default interface menuStructor {
    key:string,
    title:string,
    url: string,
    children?:Array<menuStructor>
} 