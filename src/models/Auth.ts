export type Auth = {
    email: string;
    confirmCode:number;
    codeCounter:number;
    codeExpire:Date;
    isActive:boolean;
  };