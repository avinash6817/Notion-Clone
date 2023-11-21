"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
}

from "@/components/ui/alert-dialog";

interface ConfirModalProps{
    children : React.ReactNode;
    onConfirm: () => void;
}

export const ConfirmModel = ({
    children,
    onConfirm
} : ConfirModalProps) => {

    const handleConfirm = (
        e : React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        onConfirm();
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild onClick={(e) => e.stopPropagation()}>
                {children}
            </AlertDialogTrigger> 

            <AlertDialogContent>

                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are You absolutely sure ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action can't be undone
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel onClick={e => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>
    )
}