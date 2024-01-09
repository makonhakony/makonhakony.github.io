export interface Position {
    companyPicture: string;
    companyPictureLink: string;
    companyName: string;
    companyTime: string;
    companyLocation: string;
    position: {
        positionName: string,
        positionDescription: string[];
        positionSkill: string[];
    }
}