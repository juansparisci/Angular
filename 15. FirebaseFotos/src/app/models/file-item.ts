export class FileItem {
    public Archivo: File;
    public NombreArchivo: string;
    public url = '';
    public estaSubiendo: boolean;
    public progreso: number;
    constructor( archivo: File ) {
        this.Archivo = archivo;
        this.NombreArchivo = archivo.name;
    }
}
