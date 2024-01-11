export interface Position {
    companyPicture: string;
    companyPictureLink: string;
    companyName: string;
    companyTime: string;
    roles: {
        roleName: string,
        roleTime?: string,
        roleDescription: string[];
        roleSkill: string[];
        roleLocation: string;
    }
}