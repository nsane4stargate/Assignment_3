export class Article {
    title: string;
    link: string;
    votes: number;
    role: string;

    constructor(title: string, link: string,  role: string, votes?: number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.role = role;
    }

    voteUp(): void{
        this.votes += 1;
    }

    voteDown(): void{
        this.votes -= 1;
    }

    isAdministrator(): boolean{
        return (this.role.toUpperCase() == ('administrator').toUpperCase());
    }

    domain(): string{
        try{
             // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
             // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        }catch(err) {
            return null;
        }
    }
}