import styles from './ConfirmDialog.module.css';

export interface ConfirmDialogProps {
    show: boolean;
    onConfirm: (event: React.MouseEvent) => void;
    onCancel: (event: React.MouseEvent) => void;
}

export function ConfirmDialog({ show, onConfirm, onCancel } : ConfirmDialogProps) {
    return (
        <>
            { show ? <div className={styles.dialog}>
                <h2>Dialog</h2>

                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>Cancel</button>
            </div> : ''}
        </>
    )
}