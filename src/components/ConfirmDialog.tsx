import styles from './ConfirmDialog.module.css';

export interface ConfirmDialogProps {
    show: boolean;
    onConfirm: (event: React.MouseEvent) => void;
}

export function ConfirmDialog({ show, onConfirm } : ConfirmDialogProps) {
    return (
        <>
            { show ? <div className={styles.dialog}>
                <h2>Dialog</h2>

                <button onClick={onConfirm}>Yes</button>
                <button>Cancel</button>
            </div> : ''}
        </>
    )
}