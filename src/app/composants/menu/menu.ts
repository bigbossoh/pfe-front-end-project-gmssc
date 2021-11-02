export interface Menu{
  id?: string;
  titre?: string;
  url?:string;
  icon?:string;
  sousMenu?:Array<Menu>;
}
