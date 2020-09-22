//#region Imports

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../../common/base-entity';
import { CauseEntity } from '../../causes/entities/cause.entity';
import { UserEntity } from '../../user/entities/user.entity';

//#endregion

/**
 * A class que representa a entidade que lida com as informações sobre as ongs
 */
@Entity('ongs')
export class OngEntity extends BaseEntity {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    partial: Partial<OngEntity> | OngEntity,
  ) {
    super();

    Object.assign(this, { ... partial });
  }

  //#endregion

  //#region Public Properties

  /**
   * O nome dessa ong
   */
  @Column({ nullable: false })
  public name: string;

  /**
   * O e-mail da ong
   */
  @Column({ nullable: false })
  public email: string;

  /**
   * A cor dessa ONG
   */
  @Column({ nullable: false })
  public color: string;

  /**
   * A imagem dessa ONG
   */
  @Column({ nullable: false })
  public image: string;

  /**
   * O número de WhatsApp para entrar em contato com essa ong
   */
  @Column({ nullable: false })
  public whatsapp: string;

  /**
   * A identificação do usuário que controla essa ong
   */
  @Column({ nullable: false })
  public userId: number;

  /**
   * As informações sobre o usuário
   */
  @ManyToOne(() => UserEntity, user => user.ongs)
  public user?: UserEntity;

  /**
   * A lista de causas associadas a essa ONG
   */
  @OneToMany(() => CauseEntity, cause => cause.ong)
  public causes?: CauseEntity[];

  //#endregion

}
