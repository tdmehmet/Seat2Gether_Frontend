import { DatagridColumn } from '../../datagrid.column';

export class MaterialMasterDatagridColumns {


  partNumber: DatagridColumn;
  designation: DatagridColumn;
  position: DatagridColumn;
  lfdnrCharacteristic: DatagridColumn;
  standardTimeInMinute: DatagridColumn; /** Must be double */
  vzko: DatagridColumn; /** Must be double */
  vzbw: DatagridColumn; /** Must be double */
  vzel: DatagridColumn; /** Must be double */
  vzaz: DatagridColumn; /** Must be double */
  vzvs: DatagridColumn; /** Must be double */
  vzmo: DatagridColumn; /** Must be double */
  vzal: DatagridColumn; /** Must be double */
  vzgf: DatagridColumn; /** Must be double */
  standart: DatagridColumn;
  active: DatagridColumn;
  createdBy: DatagridColumn;
  createdOn: DatagridColumn;  /** Must be date */
  alteredFrom: DatagridColumn;
  changedOn: DatagridColumn; /** Must be date */
  bulkGood: DatagridColumn;
  numberAdditionalShare: DatagridColumn;
  background: DatagridColumn;
  foreground: DatagridColumn;
  posX: DatagridColumn;
  posY: DatagridColumn;
  picture: DatagridColumn;
  acquisitionVariation: DatagridColumn;
  partNumberWithout: DatagridColumn;

  constructor(partNumber: DatagridColumn, designation: DatagridColumn, position: DatagridColumn,
              lfdnrCharacteristic: DatagridColumn, standardTimeInMinute: DatagridColumn, vzko: DatagridColumn, vzbw: DatagridColumn,
              vzel: DatagridColumn, vzaz: DatagridColumn, vzvs: DatagridColumn, vzmo: DatagridColumn,
              vzal: DatagridColumn, vzgf: DatagridColumn, standart: DatagridColumn, active: DatagridColumn,
              createdBy: DatagridColumn, createdOn: DatagridColumn, alteredFrom: DatagridColumn, changedOn: DatagridColumn,
              bulkGood: DatagridColumn, numberAdditionalShare: DatagridColumn, background: DatagridColumn, foreground: DatagridColumn,
              posX: DatagridColumn, posY: DatagridColumn, picture: DatagridColumn, acquisitionVariation: DatagridColumn, partNumberWithout: DatagridColumn) {
    this.partNumber = partNumber;
    this.designation = designation;
    this.position = position;
    this.lfdnrCharacteristic = lfdnrCharacteristic;
    this.standardTimeInMinute = standardTimeInMinute;
    this.vzko = vzko;
    this.vzbw = vzbw;
    this.vzel = vzel;
    this.vzaz = vzaz;
    this.vzvs = vzvs;
    this.vzmo = vzmo;
    this.vzal = vzal;
    this.vzgf = vzgf;
    this.standart = standart;
    this.active = active;
    this.createdBy = createdBy;
    this.createdOn = createdOn;
    this.alteredFrom = alteredFrom;
    this.changedOn = changedOn;
    this.bulkGood = bulkGood;
    this.numberAdditionalShare = numberAdditionalShare;
    this.background = background;
    this.foreground = foreground;
    this.posX = posX;
    this.posY = posY;
    this.picture = picture;
    this.acquisitionVariation = acquisitionVariation;
    this.partNumberWithout = partNumberWithout;
  }

}
